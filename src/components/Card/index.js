import { Card } from "react-bootstrap"

const Cards = ({ id, title, message, image, linkBuy }) => {
    let cardTarget

    const removeStyling = () => {
        const firstSibling = cardTarget.nextElementSibling
        const secondSibling = cardTarget.nextElementSibling.nextElementSibling
        firstSibling.classList.add("d-none")
        secondSibling.classList.add("d-none")
        cardTarget.parentElement.style.transform = "scale(1)"
        cardTarget = null
    }

    const addStyling = () => {
        cardTarget.parentElement.style.backgroundColor = "#606c36"
        cardTarget.parentElement.style.transform = "scale(1.2)"
        const firstSibling = cardTarget.nextElementSibling
        const secondSibling = cardTarget.nextElementSibling.nextElementSibling
        firstSibling.classList.remove("d-none")
        secondSibling.classList.remove("d-none")
    }
    
    document.addEventListener("click", (e) => {
        if(cardTarget && e.target !== cardTarget){
            if( !e.target.classList.contains("card-title") &&
                    !e.target.classList.contains("card-body") &&
                        !e.target.classList.contains("card-text")){

                removeStyling()
            }
        }
        if(e.target.classList.contains("card-img-top")){
            cardTarget = e.target
            addStyling()
        }
    })


    return(
        <Card key={id} style={{ width: '15rem', borderRadius:"12px", border: "0" , backgroundColor: "transparent", transition:"transform 0.1s" }}>
            <Card.Img style={{borderRadius:"12px"}} variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d7b4e8b7d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d7b4e8b7d%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.24835968017578%22%20y%3D%2297.5%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
            <Card.Body className="d-none">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
            </Card.Body>
            <Card.Body className="d-none">
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Cards