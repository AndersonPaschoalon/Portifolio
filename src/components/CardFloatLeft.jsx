/**
 * 
<!--START Card Float Left-->
<div class="card float-left">
  <div class="row ">
    <div class="col-sm-7">
      <div class="card-block">
        <!--           <h4 class="card-title">Small card</h4> -->
        <p>Wetgple text to build your own card.</p>
        <p>Change around the content for awsomenes</p>
        <a href="#" class="btn btn-primary btn-sm">Read More</a>
      </div>
    </div>
    <div class="col-sm-5">
      <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt="">
    </div>
  </div>
</div>
<!--END Card Float Left-->
 */
class CardCFloatLeftextends React.Component
{
    constructor()
    {
        super(props);
    }

    componentWillMount()
    {

    }

    render()
    {
        // vars
        let THIS_METHOD = "CardCFloatRight.render() ";
        let i = 0;
        let imgElements = [];
        let textBody = [];

        // Card image
        if('image' in this.props.image && this.props.image != null && this.props.image != "")
        {
          imgElements.push(<img class="d-block w-100" src={this.props.image} alt=""></img>);
        }
        // title
        if('title' in this.props && this.props.title != null && this.props.title != "")
        {
            textBody.push(<h4 className="card-title">{this.props.title}</h4>);
        }
        // Card body
        if(Array.isArray(this.props.textLines))
        {
            for(i = 0; i < this.props.textLines.length; i++)
            {
                textBody.push(<p className="card-text">{this.props.textLines[i]}</p>);
            }
        }
        else if(this.props.textLines === null || this.props.textLines === "")
        {
            console.log(THIS_METHOD + " -- item textLines is malformed ");
        }
        else 
        {
            textBody.push(<p className="card-text">{this.props.textLines}</p>);
        }
        textBody.push(<br></br>);

        // card button
        if('btnText' in this.props && this.props.btnText != null && this.props.btnText != "" &&
           'btnLink' in this.props && this.props.btnLink != null && this.props.btnLink != "")
        {
            textBody.push(<a href={this.props.btnLink } 
                             class="mt-auto btn btn-primary" >
                                {this.props.btnText}
                          </a>);
        }
        else 
        {
            console.log(THIS_METHOD + " -- some items from card btn are malformed (btnText or btnLink)");
        }  
        // render        
        return(
        <div className="card float-left">
          <div className="row ">
            <div className="col-sm-7">
              <div className="card-block">
              {textBody}
              </div>
            </div>
            <div className="col-sm-5">
            {imgElements}
            </div>
          </div>
        </div>
        );
    }
}