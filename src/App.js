import React from "react";
import "./styles.css";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scannedText: "",
      scannedResult: "",
    };

    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    const { scannedText, scannedResult } = this.state;
    return (
      <div>
        <h1>Html5Qrcode React example!</h1>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={this.onNewScanResult}
        />
        <div>
          <p> Text Barcode </p>
          <p> {scannedText}</p>
          {scannedText ? (
            <a
              href={`https://shop.boningros.com/pdv410/ricerca?controller=search&orderby=position&orderway=desc&s=${scannedText}`}
              target="_blank"
            >
              Search for {scannedText}
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    this.setState({
      scannedText: decodedText,
      scannedResult: JSON.stringify(decodedResult),
    });
  }
}

export default App;
