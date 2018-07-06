import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';  
import {Container} from 'react-grid-system';
import JumboTron from '../components/Jumbotron';


class Home extends Component{
    render(){
        return(
            <div>
            <NavBar />
            <JumboTron title="Welcome" subtitle="put something witty here" />
            <Container fluid >
            <h2>Welcome </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi est quaerat magni ipsum nemo cum hic sint eaque quam obcaecati iste, nostrum sapiente fuga repudiandae deserunt voluptas cupiditate consectetur. Veritatis.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi est quaerat magni ipsum nemo cum hic sint eaque quam obcaecati iste, nostrum sapiente fuga repudiandae deserunt voluptas cupiditate consectetur. Veritatis.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi est quaerat magni ipsum nemo cum hic sint eaque quam obcaecati iste, nostrum sapiente fuga repudiandae deserunt voluptas cupiditate consectetur. Veritatis.</p>
            </Container>
            <Footer />
            </div>

        );
    }
    
}

export default Home;