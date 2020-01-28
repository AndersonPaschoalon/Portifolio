// <CardPhoto image="" style="" text="" title=""></CardPhoto>
class CardPhoto extends React.Component
{
    constructor()
    {
        super(props);
        this.state = {
            image: "",
            style:"",
            text: "",
            title: ""
        } ;       
    }

    componentWillMount()
    {
        let THIS_METHOD = "CardPhoto.componentWillMount() ";
        let theTitle = "";
        let theImage = "";
        let theText = "";
        let theStyle = "width:70%";
        if(this.props.image != null)
        {
            theImage = this.props.image;
        }
        if(this.props.style != null)
        {
            theStyle = this.props.style;
        }
        if(this.props.text != null )
        {
            theText = this.props.text;
        }   
        if(this.props.title != null)
        {
            theTitle = this.props.title;
        }  
        this.setState({
            image: theImage,
            style:theStyle,
            text: theText,
            title: theTitle
        });            
    }

    render()
    {
        let THIS_METHOD = "CardPhoto.render() "
        let retCode = (
            <div className="w3-container">
                {(this.state.theTitle === "")? "": <h2> this.state.theTitle</h2>}
                <div className="w3-card-4" style={this.state.style}>
                    <img src={this.state.image} alt="Alps" style="width:100%"></img>
                    <div className="w3-container w3-center">
                        {(this.state.text === "")? "":<p> this.state.text</p>}
                    </div>
                </div>  
            </div> 
        );
        console.log(THIS_METHOD + "retCode: " + retCode);
        return retCode;
        
    }
}