<template>
  <div>
    <base-header>Challenge: The two egg problem</base-header>
    <base-subheader data-testid="title">Conditions</base-subheader>
    <base-text>
      You are given two eggs and a building that is 100 stories tall.<br />
      There is some floor that if an egg is dropped on or above that floor, it will break.<br />
      If an egg is dropped below that floor it will NOT break.<br />
      An egg can be dropped any number of times from any floor below the breaking floor.
    </base-text>
    <div class="mb-8"></div>
    <base-subheader>The Challenge</base-subheader>
    <base-text>Find the lowest floor at which a dropped egg will break.</base-text>
    <div class="mb-8"></div>
    <base-subheader>Program format</base-subheader>
    <base-text>
      Your program should take an integer as a command line argument that represents the lowest floor at which the egg
      will break.<br />
      Your program should then output which floor was tried to stdout.<br />
      After each floor, your program should output ‘True’ if the egg broke or ‘False’ otherwise.<br />
      Finally your program should output ‘Floor n’ where n is the lowest floor where a drop will result in the egg
      breaking.
    </base-text>
    <div class="mb-8"></div>
    <base-subheader>Additional rules</base-subheader>
    <ul>
      <li class="text-base leading-normal">
        Do not simply try the floor that is passed in the command line. Passing the argument as a command line parameter
        is only done to simplify the process, you must come up with an appropriate algorithm.
      </li>
      <li class="text-base leading-normal">
        Do not Google your answer. I won’t know if you did this, but if you do your trophy will be a lie.
      </li>
      <li class="text-base leading-normal">
        For this challenge, there are suboptimal solutions that will still be acceptable answers. For the case of
        scoring, the solution that tries the fewest number of floors on average will be considered the correct solution
        in a category.
      </li>
    </ul>
    <div class="mb-8"></div>
    <base-subheader>What you should submit</base-subheader>
    <base-text>
      You should submit all files necessary to run your solution as a zip or tar file. <br />
      In addition, you should submit a readme file that includes instructions on how to build and run your program.
      <br />
      If you are submitting in multiple categories, please submit a single zip or tar file with each version of your
      program, and its readme, in a separate directory.
    </base-text>
    <div class="mb-8"></div>
    <base-subheader>Other Info</base-subheader>

    <base-text data-testid="description">
      This challenge was announced on <span class="font-bold">Jan 31, 2019 noon</span><br />
      Team submissions are due <span class="font-bold">Feb 14, 2019 noon</span><br />
      Points will be announced after all programs have been judged.
    </base-text>
    <div class="mb-8"></div>
    <base-subheader>Example output</base-subheader>
    <img src="/program-example-output.png" />
    <div class="mb-12"></div>
  </div>
</template>

<script>
import { parseISO, format } from 'date-fns';
export default {
  name: 'ChallengeComponent',
  props: {
    challenge: {
      type: Object,
      required: true
    }
  },
  computed: {
    deadline() {
      return format(parseISO(this.challenge.eventDate), 'MMM d, yyyy');
    },
    announcementDate() {
      return format(parseISO(this.challenge.announcementDate), 'MMM d, yyyy');
    }
  }
};
</script>
