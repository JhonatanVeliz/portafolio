import certificado_1 from "../certifications/fundamentos.png";

import file from "../files/fundamentos.pdf";

import CardCertificate from "../components/CardCertificate";

export const Certificates = () => {

  const listCertificates = [
    { id: 411, title : 'Fundamentos', description : 'asasd', file, img: certificado_1, alt: 'certificado 1' }
  ]

  return (
    <div className='grid paddings projects projects__cards'>

      {
        listCertificates.map((certificate) => (
          <CardCertificate 
            key={certificate.id}
            title={certificate.title}
            description={certificate.description}
            file={certificate.file}
            img={certificate.img}
            alt={certificate.alt}
          />
        ))
      }

    </div>
  )
}
