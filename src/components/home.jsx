import React, { Component } from "react";
import PageHeader from "./pageHeader";
import Card from "./card";
class Home extends Component {
  state = {
    image: {
      url: "https://picsum.photos/1200/700",
      alt: "Random image",
    },
    cards: [
      {
        img: {
          title: "first card",
          url: "https://cdn.pixabay.com/photo/2022/01/25/16/01/sky-6966721_960_720.jpg",
          alt: "sky pic",
        },
        description: "this is the first card",
        phone: "050-1234567",
        address: "la la land",
        number: "1212122",
      },
      {
        img: {
          title: "second card",
          url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/https://img.poki.com/4206da66a0e5deca9115d19a4bc0c63f.png",
          alt: "fish pic",
        },
        description: "this is the second card",
        phone: "054-8238568",
        address: "ma ma land",
        number: "3232455",
      }
     
    ]
  };

  handleDelete = (cardID)=>{
    let filteredCards = this.state.cards.filter((c,i)=>{
      return i != cardID;
    });
    this.setState({cards:filteredCards});
  }

  render() {
    const cards = [...this.state.cards];

    if(!cards.length) return <p>No cards in the Array</p>
    return (
      <div className="container">
        <PageHeader title={"Business Card App"} subTitle={cards.length ? "Here you will find business cards" : ''} />
        <div style={{display:'flex',flexDirection:'row'}}>
        {
          cards.map((c,k) => <Card card={c} cardID={k} key={k} onDelete={this.handleDelete}/>)
        }
        </div>
      </div>
    );
  }
}

export default Home;
