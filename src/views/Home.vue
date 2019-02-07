<template>
  <div>
    <base-header>Home</base-header>
    <base-text>
      Welcome to the Cadre5 Coding Challenge
    </base-text>
    <base-subheader>How does it work?</base-subheader>
    <base-text class="mb-3">
      Developers will form teams of 2-3 people, or work as an individual. Once your team has been formed, or if you
      decide to work alone, submit the names of your team mates. After the teams have been formed the challenge problem
      will be presented. After the challenge is presented, the teams will be given two weeks to complete it and submit
      the results. Once all the solutions are submitted, they will be assigned points and a winner will be announced.
    </base-text>
    <base-text class="mb-3">
      Registration must be completed by <span class="font-bold">Noon on January 31st</span> for the first challenge.
    </base-text>
    <base-subheader>
      What languages can I use?
    </base-subheader>
    <base-text class="mb-3">
      You are free to use any “production ready” language. If you could use it in a production application at Cadre5,
      you can use it for the programming challenge. For scoring purposes, languages will be divided into three
      categories; <span class="font-bold">Scripting Languages</span> (e.g. Python, JavaScript),
      <span class="font-bold">Intermediate Languages</span> (e.g. C#, Java), and
      <span class="font-bold">Systems Languages</span> (e.g. C/C++).
    </base-text>
    <base-subheader>
      How will submissions be scored?
    </base-subheader>
    <base-text>
      Teams will receive one point if they submit a working solution, three points if they submit a working solution in
      two language categories, and five points if they submit a working solution in all three language categories.
    </base-text>
    <base-text>
      The fastest solution in each category will earn one additional point.
    </base-text>
    <base-text>
      The shortest solution in each category will earn one additional point.
    </base-text>
    <base-text>
      The shortest solution overall will earn one additional point.
    </base-text>
    <base-text>
      The fastest solution overall will earn two additional points.
    </base-text>
    <base-text>
      The shortest solution will be determined by the number of characters in the programs core logic, minus whitespace.
    </base-text>
    <base-subheader>
      What happens if I win?
    </base-subheader>
    <base-text>
      In addition to considerable bragging rights, you will also receive a trophy to show off what a spectacular
      developer you are! The winning team may also be asked to present their solution at the next company chow-wow.
    </base-text>
    <base-subheader>
      More Info
    </base-subheader>
    <base-text>
      Check out the <router-link to="/challenge/current">Challenge</router-link> page for more info.
    </base-text>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
