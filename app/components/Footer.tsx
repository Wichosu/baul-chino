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
        Desarrollado por <Link href={"https://www.linkedin.com/in/luis-wicho-miranda/"} target="_blank">Luis Miranda (Wicho)</Link>
      </small>
  )
}