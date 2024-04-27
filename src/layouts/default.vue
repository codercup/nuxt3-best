<template>
  <div class="flex flex-col h-screen">
    <div class="leading-10 bg-slate-500 fixed w-full z-20 h-10">topbar</div>
    <div class="flex-1 pt-10 bg-gray-100">
      <slot />
    </div>
    <div class="h-10 leading-10 bg-slate-500">footer</div>
  </div>
</template>
