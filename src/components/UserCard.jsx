import PropTypes from "prop-types";
const data = [
    {
        name : "Raaja Kartikeya",
        city : "Madurai",
        description : "Frontend Developer",
        skills : ["C","C++","Python","Deep Learning","React","Node","MySQL"],
        online : false,
        profile : "/images/img2.jpeg",
    },
    {
        name : "Raaja Kartikeya",
        city : "Madurai",
        description : "Programmer",
        skills : ["C","C++","Python","Deep Learning","React","Node","MySQL","Machine Learning"],
        online : true,
        profile : "/images/img2.jpeg",
    },
    {
        name : "Raaja Kartikeya",
        city : "Madurai",
        description : "Electronics Engineer",
        skills : ["C","C++","Python","Deep Learning","React","Node","MySQL","Embedded C"],
        online : false,
        profile : "/images/img2.jpeg",
    }
];
function User(props){
    return(
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} className="img" alt="" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key = {index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export const UserCard = () => {
  return (<>
        {data.map((user,index)=>(
            <User key = {index} 
            name = {user.name}
            city = {user.city}
            profile = {user.profile}
            description = {user.description}
            skills = {user.skills}
            online = {user.online}
            />
        ))}
        </>
  )
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    city : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    skills :PropTypes.arrayOf(PropTypes.string).isRequired,
    online : PropTypes.bool.isRequired,
    profile : PropTypes.string.isRequired,
};

