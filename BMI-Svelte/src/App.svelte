<script lang="ts">
    import Button from "./lib/Button.svelte";
    import Input from "./lib/Input.svelte";
  
    let name: string, inputWeight: string, inputHeight: string
  
    function calculate() {
        const weight = Number(inputWeight)
        const height = Number(inputHeight)
  
        const bmi = weight / (height*height)

        const bmiSpan = document.getElementById('bmi')
        bmiSpan.innerHTML = bmi.toFixed(1)
      
        const result = document.getElementById('result')

        result.style.display = 'flex'
        result.classList.add('visivel')
        result.classList.remove('visivel') 
    
    }
  
</script>
  
<div class='container'>
    <header>
        <h1>BMI Calculator</h1>
    </header>
    <main>
        <h2>Type your data</h2>
        <form>
            <Input label='Name' bind:value={name}  type='text'/>
            <Input label='Weight' bind:value={inputWeight} type='number'/>
            <Input label='Height' bind:value={inputHeight} type='number' step="0.01"/>
            <Button onClick={calculate}/>
        </form>
        <section id="result">BMI: <span id="bmi">34.5</span></section>
    </main>
    <footer>
        <p>R1 Software @ 2023</p>
    </footer>
</div>