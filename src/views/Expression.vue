<header>
    <script src="https://unpkg.com/vue@next"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </header>
  
  
  <template>
    
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total Students"
            type="gradient-info"
            sub-title="90"
            icon="ni ni-hat-3"
            class="mb-4 mb-xl-0"
          >
            
           <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 3.48%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template> 
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Stressed Students"
            type="gradient-danger"
            sub-title="11"
            icon="fa fa-frown-open"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-down"></i> 20%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>

        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Slightly Stressed "
            type="gradient-warning"
            sub-title="23"
            icon="fa fa-meh"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-danger mr-2"
                ><i class="fa fa-arrow-up"></i> 10%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Normal Students"
            type="gradient-success"
            sub-title="56"
            icon="fa fa-grin"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 33%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        
        
      </div>
    </base-header>
    
    <body onload="init();">
      <div id="home" style="padding: 100px " class="container-fluid mt--7">
      <card shadow type="secondary">
  
        <br>
        <div>
        <div class="col-md-4 col-md-offset-4 center"><h1>Select Photo To Upload</h1>
        </div>
        
    <div id="wrapper">
            
            <input type="file" id="fileInput">  
            <button v-on:click="uploadPhotoButton" id="uploadPhotoButton">Upload Photo</button>
            <div>
                <img id="imagePhoto" height="400px">
                <h3>The expression display by the student is:</h3>
                <p id="Studentstresslevel"></p>
                
                <p>**Anger, Fear, Disgust and Sadness expression is a sign that the student is STRESS, please monitor the students closely
                if they display any Anger, Fear, Disgust and Sadness expression**</P>
                
            </div>
    </div>
    

        </div>
      </card>
    </div>
    </body>
  </template>
  
<script>

        // Display the contents of the file as an image
        //
        function displayPhotoFromFile()
        {
            var fileBlob = document.getElementById('fileInput').files[0]

            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imagePhoto').src = e.target.result
            };
            reader.readAsDataURL(fileBlob);
            
        }          
        

        // Extract the blob from the canvas and post it up to our API
        //
        function postPhotoFromFile()
        {
          
            var fileBlob = document.getElementById('fileInput').files[0]

            const formData = new FormData();
            formData.append('file', fileBlob);

            fetch('http://it3100-190370s-aapassignment.southeastasia.azurecontainer.io/facialexpression', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                // Display the results here.
                
                document.getElementById("Studentstresslevel").innerHTML = result.prediction   
            })
            .catch(error => {
                console.error('Error:', error);
            });    
        }


        
        // Initialize the application by starting the web cam
        // This method is called by the body's onload event.
        //
        function init() {

            // When the take photo button is clicked, takes a photo from the video frame,
            // displays it in the canvas, uploads it to our API and displays
            // the result.
            //
            document.getElementById('uploadPhotoButton').addEventListener('click', function() {
                
                displayPhotoFromFile();

                postPhotoFromFile();
            })

        }

        export default {
          name: "expression",

 
  methods: {
    uploadPhotoButton() {
      document.getElementById('uploadPhotoButton').addEventListener('click', function() {
                
                displayPhotoFromFile();

                postPhotoFromFile();
            })
    },

  }

}


    </script>
    
<style>
#wrapper{
  text-align: center
}
#uploadPhotoButton{
  border-radius: 5px;
  background-color: #3282cd	;
  color: white;
  outline-color: #3282cd;
  border-block-color:#3282cd ;
}
#fileInput{
  border-radius: 2px;
  
}

#Studentstresslevel{
  text-transform: capitalize;
  font-weight: bold;

}


</style>

  