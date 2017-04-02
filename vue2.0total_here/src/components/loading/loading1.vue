<template lang="html">
  <div id="stage">
      <div id="rotate">
        <div id="ring-1" class="ring"><div class="poster" style="transform: rotateY(0deg) translateZ(200px);"><p>0</p></div><div class="poster" style="transform: rotateY(30deg) translateZ(200px);"><p>1</p></div><div class="poster" style="transform: rotateY(60deg) translateZ(200px);"><p>2</p></div><div class="poster" style="transform: rotateY(90deg) translateZ(200px);"><p>3</p></div><div class="poster" style="transform: rotateY(120deg) translateZ(200px);"><p>4</p></div><div class="poster" style="transform: rotateY(150deg) translateZ(200px);"><p>5</p></div><div class="poster" style="transform: rotateY(180deg) translateZ(200px);"><p>6</p></div><div class="poster" style="transform: rotateY(210deg) translateZ(200px);"><p>7</p></div><div class="poster" style="transform: rotateY(240deg) translateZ(200px);"><p>8</p></div><div class="poster" style="transform: rotateY(270deg) translateZ(200px);"><p>9</p></div><div class="poster" style="transform: rotateY(300deg) translateZ(200px);"><p>10</p></div><div class="poster" style="transform: rotateY(330deg) translateZ(200px);"><p>11</p></div></div>
        <div id="ring-2" class="ring"><div class="poster" style="transform: rotateY(0deg) translateZ(200px);"><p>0</p></div><div class="poster" style="transform: rotateY(30deg) translateZ(200px);"><p>1</p></div><div class="poster" style="transform: rotateY(60deg) translateZ(200px);"><p>2</p></div><div class="poster" style="transform: rotateY(90deg) translateZ(200px);"><p>3</p></div><div class="poster" style="transform: rotateY(120deg) translateZ(200px);"><p>4</p></div><div class="poster" style="transform: rotateY(150deg) translateZ(200px);"><p>5</p></div><div class="poster" style="transform: rotateY(180deg) translateZ(200px);"><p>6</p></div><div class="poster" style="transform: rotateY(210deg) translateZ(200px);"><p>7</p></div><div class="poster" style="transform: rotateY(240deg) translateZ(200px);"><p>8</p></div><div class="poster" style="transform: rotateY(270deg) translateZ(200px);"><p>9</p></div><div class="poster" style="transform: rotateY(300deg) translateZ(200px);"><p>10</p></div><div class="poster" style="transform: rotateY(330deg) translateZ(200px);"><p>11</p></div></div>
        <div id="ring-3" class="ring"><div class="poster" style="transform: rotateY(0deg) translateZ(200px);"><p>0</p></div><div class="poster" style="transform: rotateY(30deg) translateZ(200px);"><p>1</p></div><div class="poster" style="transform: rotateY(60deg) translateZ(200px);"><p>2</p></div><div class="poster" style="transform: rotateY(90deg) translateZ(200px);"><p>3</p></div><div class="poster" style="transform: rotateY(120deg) translateZ(200px);"><p>4</p></div><div class="poster" style="transform: rotateY(150deg) translateZ(200px);"><p>5</p></div><div class="poster" style="transform: rotateY(180deg) translateZ(200px);"><p>6</p></div><div class="poster" style="transform: rotateY(210deg) translateZ(200px);"><p>7</p></div><div class="poster" style="transform: rotateY(240deg) translateZ(200px);"><p>8</p></div><div class="poster" style="transform: rotateY(270deg) translateZ(200px);"><p>9</p></div><div class="poster" style="transform: rotateY(300deg) translateZ(200px);"><p>10</p></div><div class="poster" style="transform: rotateY(330deg) translateZ(200px);"><p>11</p></div></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped>
#stage {
       margin: 150px auto;
       width: 600px;
       height: 400px;
       /*

       Setting the perspective of the contents of the stage
       but not the stage itself

       */
       -webkit-perspective: 800;
     }

     #rotate {
       margin: 0 auto;
       width: 600px;
       height: 400px;
       /* Ensure that we're in 3D space */
       -webkit-transform-style: preserve-3d;
       /*
       Make the whole set of rows use the x-axis spin animation
       for a duration of 7 seconds, running infinitely and linearly
       */
       -webkit-animation-name: x-spin;
       -webkit-animation-duration: 7s;
       -webkit-animation-iteration-count: infinite;
       -webkit-animation-timing-function: linear;
     }

     .ring {
       margin: 0 auto;
       height: 110px;
       width: 600px;
       -webkit-transform-style: preserve-3d;
       -webkit-animation-iteration-count: infinite;
       -webkit-animation-timing-function: linear;
     }

     .ring > :nth-child(odd) {
       background-color: #995C7F;
     }

     .ring > :nth-child(even) {
       background-color: #835A99;
     }

     .poster {
       position: absolute;
       left: 250px;
       width: 100px;
       height: 100px;
       opacity: 0.7;
       color: rgba(0,0,0,0.9);
       -webkit-border-radius: 10px;
     }

     .poster > p {
       font-family: 'Georgia', serif;
       font-size: 36px;
       font-weight: bold;
       text-align: center;
       margin-top: 28px;
     }

     /*
     Set up each row to have a different animation duration
     and alternating y-axis rotation directions.
     */
     #ring-1 {
       -webkit-animation-name: y-spin;
       -webkit-animation-duration: 5s;
     }

     #ring-2 {
       -webkit-animation-name: back-y-spin;
       -webkit-animation-duration: 4s;
     }

     #ring-3 {
       -webkit-animation-name: y-spin;
       -webkit-animation-duration: 3s;
     }

     /*

     Here we define each of the three individual animations that
     we will be using to have our 3D rotation effect. The first
     animation will perform a full rotation on the x-axis, we'll
     use that on the whole set of objects. The second and third
     animations will perform a full rotation on the y-axis in
     opposite directions, alternating directions between rows.

     Note that you currently have to specify an intermediate step
     for rotations even when you are using individual transformation
     constructs.

     */
     @-webkit-keyframes x-spin {
       0%    { -webkit-transform: rotateX(0deg); }
       50%   { -webkit-transform: rotateX(180deg); }
       100%  { -webkit-transform: rotateX(360deg); }
     }

     @-webkit-keyframes y-spin {
       0%    { -webkit-transform: rotateY(0deg); }
       50%   { -webkit-transform: rotateY(180deg); }
       100%  { -webkit-transform: rotateY(360deg); }
     }

     @-webkit-keyframes back-y-spin {
       0%    { -webkit-transform: rotateY(360deg); }
       50%   { -webkit-transform: rotateY(180deg); }
       100%  { -webkit-transform: rotateY(0deg); }
     }
</style>
