<!-- Jia Sheng's code (194487S) -->

<template>
  <div>
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

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table title="IT1901 - Students"></projects-table>
        </div>
      </div>
      <div class="row mt-5">
        <!--<div class="col">
          <projects-table type="dark" title="IT1902 - Students"></projects-table>
        </div>
        -->
      </div>
      <body>
        
        <div>
            <h1>Current video stream</h1>
            <button id="pauseButton">Pause/Unpause Capture</button>
            <div>
                <p>Student Stress level:</p> 
                <p id="studentstresslevel"></p>
            </div>

            <div style='width:533px; height:400px; position:relative' >

                <video  width=533 height=400 id="video" controls autoplay></video>
                <div id="dots" style='position:absolute; top:0; left: 0'>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>0</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>1</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>2</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>3</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>4</div></div>

                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>5</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>6</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>7</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>8</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>9</div></div>

                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>10</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>11</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>12</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>13</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>14</div></div>

                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>15</div></div>
                    <div style='position:absolute; top:0; left: 0'><div style='color: yellow; background-color:yellow; border-radius:3px; width:6px; height: 6px; '></div><div style='color: yellow;'>16</div></div>
                </div>

                
                <img id = "studentvideos" src="img/studentvideos/student1.jpg">
                <img id = "studentvideos" src="img/studentvideos/student2.jpg">
                <img id = "studentvideos" src="img/studentvideos/student3.jpg">
                <img id = "studentvideos" src="img/studentvideos/student4.jpg">
                <div id="recognizedDiv" style="font-size:50px; ">
                </div>

                

            </div>
            
            <!--Coordinates captured (for the past 32 frames of video)-->
            <br/>
            <textarea id="textAreaDiv" style="display:none; width: 100%; height: 200px">
            </textarea>
            
    </div>

    </body>
    </div>
    
  </div>
  
</template>

<script>
import ProjectsTable from "./Tables/StudentsTable";
var pauseButton;
var webcamStarted = false;
        var video;
        var recognizedDiv;
        var textAreaDiv;
        var webcamStream;
        var posemodel = null;

        var labels = ["JUMPING",
                        "JUMPING_JACKS",
                        "BOXING",
                        "WAVING_2HANDS",
                        "WAVING_1HAND",
                        "CLAPPING_HANDS"];

        

function stopWebcam() {
            webcamStarted = false;
            webcamStream.getTracks()[0].stop();
        }

        function startWebcam() {
            if (navigator.getUserMedia) {
                navigator.getUserMedia (

                    // constraints
                    {
                        video: true,
                        audio: false
                    },

                    // successCallback
                    function(localMediaStream) {
                        webcamStream = localMediaStream;
                        video.srcObject = localMediaStream;
                        video.play();
                    },

                    // errorCallback
                    function(err) {
                        console.log("The following error occured: " + err);
                    }
                );
            } 
            else 
            {
                console.log("getUserMedia not supported");
            }  
        }

        function init() {
            video = document.querySelector('video');
            video.addEventListener('loadeddata', (event) => {
                console.log('loadeddata')
                webcamStarted = true;
            });

            recognizedDiv = document.getElementById('recognizedDiv');
            textAreaDiv = document.getElementById('textAreaDiv');
            pauseButton = document.getElementById('pauseButton');
            pauseButton.addEventListener("click", function() {
                if (webcamStarted)
                    stopWebcam();
                else
                    startWebcam();
            })

            startWebcam();
        }

        function computeLength(x1, y1, x2, y2)
        {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }


        // Returns the index of the maximum value in an array.
        //
        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }

            var max = arr[0];
            var maxIndex = 0;

            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }

            return maxIndex;
        }

        var openPosePoints = [[]];
          for (var i = 0; i < 32; i++)
            openPosePoints[0].push([
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
            ])


        async function recognizePose()
        {
            if (posemodel == null || webcamStarted == false)
            {
                // The Posenet model or the camera is not ready,
                // so return.
                //
                window.setTimeout(recognizePose, 300);
                return;
            }

            // call the Tensorflow pose estimation 
            //
            const pose = await posemodel.estimateSinglePose(video, {
                flipHorizontal: false
            });

            // Draw dots on the video to show the identified joints
            //
            var dots = document.getElementById('dots');
            var nodes = []
            for (var i = 0; i < dots.childNodes.length; i++)
                if (dots.childNodes[i].tagName == "DIV")
                    nodes.push(dots.childNodes[i]);
            pose.keypoints.forEach(function(item, index) {
                if (item.score >= 0.5)
                {
                    nodes[index].style.display = '';
                    nodes[index].style.left = Math.floor(item.position.x).toString()+"px";
                    nodes[index].style.top = Math.floor(item.position.y).toString()+"px";
                }
                else
                {
                    nodes[index].style.display = 'none';
                    nodes[index].style.left = 0;
                    nodes[index].style.top = 0;
                }
                console.log(item.position)
                console.log(nodes[index].style.left,nodes[index].style.top)
                
            });

            // Insert the 18 keypoints (with x, y coordinates)
            // into our tensor (containing the past 32 frames of coordinates)
            //
            var lastIndex = openPosePoints[0].length
            openPosePoints[0].push([
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
                0.0, 0.0, 0.0, 0.0, 0.0,   0.0, 0.0, 0.0, 0.0, 
            ])
            for (var i = 0; i < pose.keypoints.length; i++)
            {
                if (pose.keypoints[i].score >= 0.1)
                {
                    openPosePoints[0][lastIndex][i * 2 + 0] = pose.keypoints[i].position.x;
                    openPosePoints[0][lastIndex][i * 2 + 1] = pose.keypoints[i].position.y;
                }
            }

            // Print the output into the TextArea 
            // (so that you can capture the data)
            //
            var s = "";
            for (var i = 0; i < openPosePoints[0].length; i++)
            {
                for (var j = 0; j < openPosePoints[0][i].length; j++)
                    s = s + (j != 0 ? "," : "") + openPosePoints[0][i][j].toFixed(2).padStart(6, "000000") ;
                s = s + "\n";
            }
            textAreaDiv.innerHTML = s;

            // Remove the first (oldest) set of keypoints so that we
            // always maintain a sliding window of the latest 32 keypoints
            //
            if (openPosePoints[0].length > 32)
                openPosePoints[0].splice(0, 1);     

            // POST data to our AI server (later)
            //
            



            var posePoints = openPosePoints[0][openPosePoints[0].length - 1]
            fetch('http://it3100-194487s-mywebserver.southeastasia.azurecontainer.io/classifier_pose', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },                
                body: JSON.stringify(
                    {
                        poseCoordinates: posePoints
                    }
                )
            })
            .then(response => response.json())
            .then(result => {
                document.getElementById("studentstresslevel").innerHTML=result.result

            })
            .catch(error => {
                console.error('Error:', error);
            }); 
            

            window.setTimeout(recognizePose, 300);
        }
export default {
  name: "tables",
  components: {
    ProjectsTable,
  },
  mounted(){
    init()
    

        
        //
        posenet.load().then(function(model) {
            // posenet model loaded
            console.log('Posenet loaded');
            posemodel = model;
        });
        navigator.getUserMedia = ( navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);
        window.setTimeout(recognizePose, 300);
  }
};
</script>


<style>
  #studentvideos{
    float: right
  }

</style>
