import Link from "next/link"

export default function Footer() {
  return (
      <small style={{
        display: 'block',
        textAlign: 'center', 
        marginTop: '40px', 
        marginBottom: '40px'
      }}>
        Más por venir...
      <br/>
        Desarrollado por <Link href={"https://github.com/Wichosu"} target="_blank">Luis Miranda (Wicho)</Link>
      </small>
  )
}