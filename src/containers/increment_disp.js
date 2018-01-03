import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {incrementCount} from '../actions/index';

class IncrementDisplay extends Component {

    constructor(props) {
        super(props);
    
        this.buttonClick = this.buttonClick.bind(this);

        this.state= {isDis: false};
    }

    componentDidMount() {

        document.querySelector('.App-logo').addEventListener('animationend', (e) => {
                                //console.log("animation finished");
                                document.querySelectorAll('.increment_button').forEach((e) => 
                                {
                                    e.classList.remove("disabled");
                                    this.setState({isDis: false});                                
                                })}
                            );
        
    }   

    buttonClick() {
        //console.log("ic");
        if(this.state.isDis) {
            return;
        }
        this.setState({isDis: true});
        this.props.incrementCount(this.props.payload) ;
        document.querySelectorAll(".increment_button").forEach((e) => 
        {e.classList.add("disabled")}); 

        // if(this.props.payload > 0)
        document.querySelector(".App-logo").classList.add("anim");
        // else
            // document.querySelector(".App-logo").classList.add("anim-r");  
    }

    renderNumbers() {
        if(this.props.number_disp) {
            return ( <h2>{this.props.count}</h2> );
        }
        return <p></p>;
    }

    render() {
        return (
            <div>
                {this.renderNumbers()}
                <button 
                className="increment_button btn btn-primary"
                onClick={this.buttonClick}>
                {this.props.buttonLabel}</button>
            </div>
        );
    }
}

//Glue between react and redux
function mapStateToProps(state) {
    //Whatever is returned from here will show up as props
    //inside Booklist
    return {
        count: state.count
    };
}

//Anything returned from this function will end up as props
//on the BookList container. So booklist gets the selectbook function
function mapDispatchToProps(dispatch) {
    //Whenever select book is called, the result is passed to
    //all of the reducers
    return bindActionCreators({incrementCount: incrementCount}, dispatch);
}

//Promote BookList from component to cotainer - it needs to know
//about this new dispatch method, selectBook. Make it available 
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(IncrementDisplay);