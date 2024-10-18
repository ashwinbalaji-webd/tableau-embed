let viz;
const containerDiv = document.getElementById("vizContainer");
const btn = document.getElementById("btn");
const showBtn = document.getElementById("showBtn");
const exportPDF = document.getElementById("exportPDF");
const exportImage = document.getElementById("exportImage");
const url =
"https://public.tableau.com/views/Chocolatesalesdata_17292609202860/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"

const options = {
  hideTabs: true,
  height: '100vh',
  width: '100%',
  onFirstInteractive: function() {
    console.log("Hey, my dashboard is interactive!");
  },
  onFirstVizSizeKnown: function() {
    console.log("Hey, my dashboard has a size!");
  }
};

function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);
// listen for clicks to hide the viz
btn.addEventListener("click", function() {
  viz.hide();
});

// listen for clicks to show the viz
showBtn.addEventListener("click", function() {
  viz.show();
});

// listen for clicks to export to PDF
exportPDF.addEventListener("click", function() {
  viz.showExportPDFDialog();
});

// listen for click to export an Image
exportImage.addEventListener("click", function() {
  viz.showExportImageDialog();
});
