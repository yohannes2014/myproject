import { ContactContainer, Link } from "./styled/Contact.styles"

const Contact = () => {
 
  return (
    <ContactContainer>
        <Link href="tel:+251912445517">Call : +251-9124 445 517</Link>
        <Link href="mailto:m.yohannes2010@gmail.com">Email : m.yohannes2010@gmail.com</Link>
    </ContactContainer>
  )
}

export default Contact