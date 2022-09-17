import React from "react";

class UserForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getData} >
                    <input type="text" name="city" placeholder='Enter city name' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm;