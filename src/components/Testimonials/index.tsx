import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-[#222] text-white flex flex-col items-center text-center py-12 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-semibold mb-4">Empresas que confiam no nosso trabalho</h2>
      <p className="text-lg mb-10">Veja abaixo alguns dos nossos clientes parceiros</p>

      <div className="flex flex-col items-center z-10 gap-5">
        <div className="flex flex-col gap-5 items-center lg:flex-wrap lg:flex-row">
          <Image src={'/sobrenos/clients/BANCODOBRASILcliente.png'} width={250} height={43} alt="Logo do banco do Brasil"/>
          <Image src={'/sobrenos/clients/SANTANDERcliente.png'} width={180} height={43} alt="Logo do banco do Santander"/>
          <Image src={'/sobrenos/clients/CAIXAcliente 2.png'} width={130} height={43} alt="Logo do banco do CAIXA"/>
        </div>
        <div className="flex flex-col gap-5 items-center lg:flex-wrap lg:flex-row">
          <Image src={'/sobrenos/clients/PMDFcliente.png'} width={115} height={50} alt="Logo do banco do PMDF"/>
          <Image src={'/sobrenos/clients/SINDIPOLcliente.png'} width={150} height={50} alt="Logo do banco do SINDIPOL"/>
          <Image src={'/sobrenos/clients/CBMDFcliente.png'} width={200} height={50} alt="Logo do banco do CBMDF"/>
        </div>
      </div>

      <div className="w-full h-[60vw] max-h-[335px] max-w-[560px] lg:max-h-[600px] lg:max-w-[1100px] absolute bottom-0 lg:bottom-[-125%] bg-white rounded-tl-full rounded-tr-full z-0"></div>
    </div>
  );
}
 
export default Testimonial;