<script lang="ts">
    export let onClick: () => void = () => {}
    
</script>

<button id="btn_calculate" on:click={() => onClick()} >Calculate</button>