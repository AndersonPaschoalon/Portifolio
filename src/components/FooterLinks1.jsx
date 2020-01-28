/* <FooterLinks1 footerNote= "" 
                 linkSet={[{url:, label:""}, 
                           {url:, label:""}, 
                           {url:, label:""}]}>
    </FooterLinks1>
HTML Template: 
      <footer id="footer" class="footer-area">
        <div class="divTable" style="width: 100%;" >
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell">&nbsp;</div>
              <div class="divTableCell"><a href="https://github.com/AndersonPaschoalon" class="nav-link">GitHub</a></div>
              <div class="divTableCell"><a href="https://www.researchgate.net/profile/Anderson_Paschoalon2" class="nav-link">Research Gate</a></div>
              <div class="divTableCell"><a href="https://br.linkedin.com/in/anderson-paschoalon-61054175" class="nav-link">Linkedin</a></div>
              <div class="divTableCell"><a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8136551T3" class="nav-link">Lattes</a></div>
              <div class="divTableCell"><a href="https://intrig.dca.fee.unicamp.br/people/" class="nav-link">INGTRIG</a></div>
              <div class="divTableCell"><a class="nav-link">Email</a></div>
              <div class="divTableCell"><a class="nav-link">Email</a></div>
              <div class="divTableCell">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="divTable" style="width: 100%;" >
          <div class="divTableBody">
            <div class="divTableRow">
              <div class="divTableCell" style="width: 25%;" >&nbsp;</div>  
              <div class="divTableCell" style="width: 50%;" >
                <p>Copyright © 2012 Andrew Louis</p>
              </div> 
              <div class="divTableCell" style="width: 25%;" >&nbsp;</div>  
            </div>
          </div>
        </div>            
      </footer>
*/
class FooterLinks1 extends React.Component
{
    constructor()
    {
        super(props);
        this.state = {
            footerNote: "",
            linkSet:""
        } ;       
    }

    componentWillMount()
    {
    }

    render()
    {
        return(
            <footer id="footer" className="footer-area">
            <div className="divTable" style="width: 100%;" >
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">&nbsp;</div>
                  <div className="divTableCell"><a className="https://github.com/AndersonPaschoalon" className="nav-link">GitHub</a></div>
                  <div className="divTableCell"><a className="https://www.researchgate.net/profile/Anderson_Paschoalon2" className="nav-link">Research Gate</a></div>
                  <div className="divTableCell"><a className="https://br.linkedin.com/in/anderson-paschoalon-61054175" className="nav-link">Linkedin</a></div>
                  <div className="divTableCell"><a className="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8136551T3" className="nav-link">Lattes</a></div>
                  <div className="divTableCell"><a className="https://intrig.dca.fee.unicamp.br/people/" className="nav-link">INGTRIG</a></div>
                  <div className="divTableCell"><a className="nav-link">Email</a></div>
                  <div className="divTableCell"><a className="nav-link">Email</a></div>
                  <div className="divTableCell">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="divTable" style="width: 100%;" >
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell" style="width: 25%;" >&nbsp;</div>  
                  <div className="divTableCell" style="width: 50%;" >
                    <p>Copyright © 2012 Andrew Louis</p>
                  </div> 
                  <div className="divTableCell" style="width: 25%;" >&nbsp;</div>  
                </div>
              </div>
            </div>            
          </footer>            
        );
    }
}