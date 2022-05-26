import {Card, Button} from "react-bootstrap";
import {useState} from "react";
function Cards(){
    const [cardContent] = useState([
        {
            title: "Novo Sistema De Casais",
            content: "Agora você também pode ter sua relação de fidelidade com sua amada."
        },{
            title: "O GM ficou maluco",
            content: "Sole o GM e ganhe prêmios ÉPICOS! Evento valendo das 09am às 17pm."
        },{
            title: "Dano de cara nova",
            content: "Nessa semana alteramos a fonte de danos para que a mesma seja mais visível."
        }
    ]);
    function animation() {
    let allCards = document.querySelectorAll(".everyCard");
    [...allCards].forEach((item)=>{
        item.addEventListener("mouseover", ()=>{
            item.style.border = "3px solid #484848";
        });
        item.addEventListener("mouseleave", ()=>{
            item.style.border = "";
        });
    })
    }
    setTimeout(()=>{animation()},200);

    return (
            <div className="cardDiv">
            {cardContent.map((item, index)=>{
                return(
                    <Card key={index} className="bg-dark text-white everyCard" style={{ width: '18rem', minHeight: '22rem'}}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Img variant="top" src={"./cardScreen"+ (++index) +".jpg"}/>
                    <Card.Body>
                    <Card.Text>
                        {item.content}
                    </Card.Text>
                    <Button variant="primary">Ler mais...</Button>
                    </Card.Body>
                    </Card>
                    )
                })}
        </div>
    )
}
export default Cards;