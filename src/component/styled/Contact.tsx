import styled from "@emotion/styled"

const Contact = () => {
    const Contact = styled.div`
    margin:auto;
    width:1300px;
    height:30px;
    display:flex;
    justify-content:space-around;

    `;
    const Link = styled.a`

    font-size:18px;
    font-weight:bold;
    text-decoration:none;
    `;

  return (
    <Contact>
        <Link href="tel:+251912445517">Call : +251-9124 445 517</Link>
        <Link href="mailto:m.yohannes2010@gmail.com">Email : m.yohannes2010@gmail.com</Link>
    </Contact>
  )
}

export default Contact