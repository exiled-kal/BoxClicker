import React from 'react';


// it import css modules styles as objects and all css as keys
import styles from './BoxClicker.module.css';

class BoxClicker extends React.Component {
// creating constructor method to use 'state'
// our props will have key'title' and value
// coz inheriting form component class invoking constructor method of compo.
  constructor(props){
    super(props);
// initialize state creating obj
    this.state = {
        boxes : [
            false,
            false,
            false
            ]
        }
    }
    // handleClick function to take in index to know which box clicked on
    handleClick = index => {
        console.log(index);

        const newBoxState = this.state.boxes.slice();
// if it was current false lets change to true or vice versa
        newBoxState[index] = !newBoxState[index];

// getting access from inherit function
        this.setState({
            boxes: newBoxState
        });

    }
    render() {        
        // function handleClick() {
        //     console.log('clicked');

            //element add.EventListener('click',event =>{.....our call back body })
        // }
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className={styles.container}>
                    {/* this calbckfn referrencing to i */}
                  {this.state.boxes.map((box, i)=>{
                      const style = box
                        ? styles.clicked
                        : styles.unclicked;

                    //   onClick is jsx attribute listening to click event and passing current index
                    return <div onClick={() => this.handleClick(i)}
                    key={i} 
                    className={styles.box + ' ' + style}>
                    </div>
                    })}
                </div>
            </div>
        )
    }

}

export default BoxClicker;