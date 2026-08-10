const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json;charset=utf-8','cache-control':'no-store'}});
export async function onRequestPost({request,env}){
  if(!env.EVOLIVIE_BACKEND_URL||!env.EVOLIVIE_BRIDGE_SECRET)return json({error:'Service temporairement indisponible.'},503);
  const input=await request.json().catch(()=>null);if(!input)return json({error:'Requête invalide.'},400);
  try{
    const response=await fetch(`${env.EVOLIVIE_BACKEND_URL}/api/contact`,{method:'POST',headers:{'content-type':'application/json','x-evolivie-bridge':env.EVOLIVIE_BRIDGE_SECRET,'cf-connecting-ip':request.headers.get('cf-connecting-ip')||''},body:JSON.stringify(input)});
    return json(await response.json().catch(()=>({error:'Réponse serveur invalide.'})),response.status);
  }catch(error){console.error(error);return json({error:'Service temporairement indisponible.'},502)}
}
