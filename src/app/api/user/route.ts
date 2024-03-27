export function POST(request: Request){
    console.log(request.body)

    return Response.json({message: "sucesso"})
}