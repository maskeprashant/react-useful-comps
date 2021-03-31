import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

class TogglePassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            password:'',
            showPassword:false
        }
    }
    handleChange= (e)=>{
        this.setState({
            password:e.target.value
        })
    }

    changePass = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    render(){
        return (
            <div>
                <div className="box">
                   
                    <input 
                        type={this.state.showPassword ? 'text':'password'} 
                        value={this.state.password} 
                        onChange={this.handleChange}
                        placeholder="password"
                        />
                        <button onClick={this.changePass}>{this.state.showPassword ? <AiOutlineEye size="1.5em" />:<AiOutlineEyeInvisible  size="1.5em"/>}</button>
                </div>

               
            </div>
        )
    }
}

export default TogglePassword;
