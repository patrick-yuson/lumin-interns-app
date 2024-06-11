<script setup>
</script>

<style>
    .introcard {
    border-radius: 1000px;
    background: var(--white1); /* Initial background color */
    border: 1px solid lightgrey;
    padding: 50px;
    margin-top: 20px;
    animation: colorChange 15s infinite linear; /* Animation with specified duration, loop, and timing function */
    }

    @keyframes colorChange {
        0% {
            background: whitesmoke; /* Initial color */
        }
        50% {
            background: var(--lightgreen1);
        }
        100% {
            background: whitesmoke; /* Final color, same as initial for smooth transition */
        }
    }

    .header{
        text-align: center;
        color: var(--black5);
    }

    .image{
        width:50%;
        margin: 20px;
    }

    .image-container{
        text-align:center;
    }
    .text{
        font-size: 20px;
        font-weight: normal;
        text-align:center;
        color: var(--black5);
    }
</style>

<template>
            <div class = "introcard">
                <div className="title-container">
                    <h1 className = "header"> Riley Washington</h1>
                </div>
                
                <div className="image-container">
                    <img className = "image" src="https://media.licdn.com/dms/image/D4D03AQEAqtRGoqiM4g/profile-displayphoto-shrink_400_400/0/1711383312553?e=1723680000&v=beta&t=QCP0TjQ1hz_nd84Hypnn_-1vEWJPuEthCE2ZhqpDsQk"> 
                </div>

                <div className="text-container">
                    <h1 className = "text"> Riley is a recent graduate of Columbia University. She loves to practice and perform jazz music, and spends
                        much of her freetime learning new coding and spoken languages. She has recently moved to Charlottesville, VA to pursue a career in 
                        software engineering at Lumin. 
                    </h1>
                </div>
            </div>
</template>