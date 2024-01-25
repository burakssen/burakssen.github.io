export const getNeofetch = () => {

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var age = year - 1999;

    if (month < 8 || (month === 8 && day < 18)) {
        age--;
    }

    return (<div style={{display: "flex", flexDirection:"row"}}>
        <div style={{padding: "1rem"}}>
            <img style={{width:"25vh", borderRadius: "10rem"}} src="profile.JPG" alt="neofetch" />
        </div>
        <div style={{height:"20vh", marginTop:"1rem", marginLeft:"1.5rem", padding:"1rem", borderLeft:"0.1rem solid", borderColor:"lightgray"}}>
        </div>
        <div style={{padding:"1rem", marginLeft:"0.5rem"}}>
            <table>
                <thead>
                    <tr>
                        <td style={{width:"10vh"}}></td>
                        <td style={{width:"30vh"}}></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{color:"greenyellow"}}>Name: </td>
                        <td>Burak Şen</td>
                    </tr>
                    <tr>
                        <td style={{color:"greenyellow"}}>Age: </td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td style={{color:"greenyellow"}}>Location: </td>
                        <td>Germany, Munich</td>
                    </tr>
                    <tr>
                        <td style={{color:"greenyellow"}}>About Me: </td>
                        <td>I am a pretty easygoing person, I don't mind if you contact me or not so you can just contact me from my contact information. 😎</td>
                    </tr>
                    <tr>
                        <td style={{color:"greenyellow"}}>Hobbies: </td>
                        <td>Coding (I basically like to code on my freetime), Doing Origami (I can make paper dragons, birds and elephants 😎).</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>)
}