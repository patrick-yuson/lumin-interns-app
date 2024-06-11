<script setup>
    import '../styles/RileysPage.css';
</script>

<style>
    .header{
        text-align: center;
    }

    .image{
        width:25%;
        margin: 20px;
    }

    .image-container{
        text-align:center;
    }
    .text{
        font-size: 20px;
        font-weight: normal;
        text-align:center;
    }

    .button{
        background-color: lightblue;
    }
</style>

<template>
        <div className = "page-container">
            <div className="title-container">
                <h1 className = "header">Riley Washington</h1>
            </div>
            
            <div className="image-container">
                <img className = "image" src="https://media.licdn.com/dms/image/D4D03AQEAqtRGoqiM4g/profile-displayphoto-shrink_400_400/0/1711383312553?e=1723680000&v=beta&t=QCP0TjQ1hz_nd84Hypnn_-1vEWJPuEthCE2ZhqpDsQk"> 
            </div>

            <div className="text-container">
                <h1 className = "text">Riley is a recent graduate of Columbia University. She loves to practice and perform jazz music, and spends
                    much of her freetime learning new coding and spoken languages. She has recently moved to Charlottesville, VA to pursue a career in 
                    software engineering at Lumin. 
                </h1>
            </div>

            <div className="links">
                <a class = "button" href="https://www.linkedin.com/in/riley-washington-349765255">LinkedIn</a>
            </div>

        </div>
</template>