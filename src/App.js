import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./App.css";
window.html2canvas = html2canvas

const styles = {
  'pdf': {
    'padding': '10px',
    'margin': '10px 10px',
    'height': '180mm',
    'width': '200mm'
  },
  'h4': {
    'color': '#000'
  },
  'logo': {
    'float': 'right',
    'height': '100px',
    'width': '300px'
  },
  'info': {
    'float': 'left'
  },
  'content': {
    'clear': 'both'
  },
  'quotation': {
    'fontFamily': 'Andika',
    'color': '#009999'
  },
  'billedTo': {
    'float': 'left'
  },
  'quote': {
    'float': 'right'
  }
};

class App extends Component {
  constructor(props){
    super(props);  
    this.handlePDF = this.handlePDF.bind(this);
  }

  handlePDF = () => {
    html2canvas(document.querySelector('#capture'), {scale: 0.25}).then(canvas => {
      document.body.appendChild(canvas);
    })
  }

  componentDidMount = () => {
    const input = document.getElementById('capture');
    return html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save("filename.pdf");  
      });
    ;
  }

  render() {
    return (
      <div className="App">
        <div id='capture' style={styles.pdf}>
        <div>
        <div style = {styles.info}>
        Insure Compliance, LLC<br/>
        4406 E Main St 102-58<br/>
        Mesa, AZ 85205 US<br/>
        (866) 647-2373<br/>
        insurecompliance.net<br/>
        </div>
        <img src="./Capture.PNG" alt="Company logo" style={styles.logo}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style = {styles.content}>
        <h3 style={styles.quotation}>QUOTATION</h3>
        
        <div>
          <div style = {styles.billedTo}>
          <b>ADDRESS</b><br/>
          Division 9<br/>
          4047 E Superior Ave<br/>
          Phoenix, AZ 85040<br/>
          </div>

          <div style = {styles.quote}>
          <b>QUOTATION</b> # 1023 &nbsp; <br />
          <b>DATE</b> 06/07/2017 &nbsp; <br />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <hr style = {styles.quotation}/>

        <div>
          <div style = {styles.billedTo}>
          <b>QUOTATION ISSUED BY</b> &nbsp;
          Eric Burgoyne<br/>
          </div>

          <div style = {styles.quote}>
          <b>QUOTATION VALID THRU</b>&nbsp; 
          06/07/2017 <br />
          </div>
        </div>

        <br />
        <br />

        <table id="customers">
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Königlich Essen</td>
            <td>Philip Cramer</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>Simon Crowther</td>
            <td>UK</td>
          </tr>
        </table>

        <br />
        <hr style = {styles.quotation}/>
        <div style = {styles.quote}><b>TOTAL</b> VALUE</div>

        <br/>
        <br/>
        <div>
          <div style = {styles.billedTo}>
            <b>Accepted by</b>
          </div>

          <div style = {styles.quote}>
            <b>Accepted Date</b>
          </div>
        </div>
</div>
        </div>
      </div>
    );
  }
}

export default App;
