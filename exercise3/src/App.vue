<script>
import people from "./assets/people.json";

export default {
  name: "App",
  data() {
    return {
      dataSize: 10,
      people: people,
    };
  },
  computed: {
    items() {
      return this.people.slice(0, this.dataSize);
    },
  },
  methods: {},
};
</script>

<template>
  <h2>Exercise 3</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>You'll find a VueJS page running, missing CSS styles.</p>
    <p>
      Without changing any HTML or Javascript, and using predefined CSS
      variables, update the style of the page, so then it matches the designs
      and situations below:
    </p>
    <ul class="examples">
      <li>
        Background layout
        <img class="preview" src="./assets/backgroundLayout.png" />
      </li>
      <li>
        Dynamic
        <img class="preview" src="./assets/dynamic.gif" />
      </li>
      <li>
        Responsive
        <img class="preview" src="./assets/responsive.gif" />
      </li>
    </ul>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <div class="input-container">
      <span>Number of items to display: </span>
      <input type="number" v-model="dataSize" min="1" :max="people.length" />
    </div>
    <div class="container">
      <div class="item" v-for="person in items" :key="person.id">
        <div class="name">{{ person.name }}</div>
        <div class="age">
          <b>Age:</b> <span>{{ person.age }}</span>
        </div>
        <div class="eye-color">
          <b class="eye">Eyes:</b>
          <img src="./assets/eye.png" :class="[person.eyeColor, 'eye-icon']" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statement,
.solution {
  border: 1px solid #dedede;
  padding: 0 0.5em;
  min-height: 40px;

  .code {
    color: #434343;
    background-color: #f9f9f9;
    padding: 0 5px;
  }

  .examples {
    text-align: center;
    list-style: none;

    li {
      display: inline-block;

      .preview {
        display: block;
        margin: 5px;
        height: 170px;
        border: 1px solid black;
      }
    }
  }

  .input-container {
    text-align: center;
    margin: 20px;
  }
}

$--font: Avenir, Helvetica, Arial, sans-serif;
$--background-1: #004c6d;
$--background-2: #547c98;
$--background-3: #93afc5;
$--eye-brown: 192deg;
$--eye-green: 290deg;
$--eye-blue: -32deg;
$--item-margin: 10px;
$--item-padding: 20px;
$--border-radius: 5px;

$--items-by-row-when-screen-is-less-than-600px: 2;
$--items-by-row-when-screen-is-more-than-600px: 4;
$--items-by-row-when-screen-is-more-than-1024px: 7;

// TODO: Add your CSS Styling here
.container {
  width: 100%;
  height: auto;
  display: grid;
  grid-gap: 10px;
  font-family: $--font;
  justify-content: space-evenly;
  justify-items: center;

  .item {
    width: 75%;
    height: 80px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-radius: $--border-radius;
    margin: $--item-margin;
    padding: $--item-padding;
    align-items: center;
    justify-content: center;
    color: #dedede;

    > div {
      width: 100%;
      height: 28px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .eye-color {
      img {
        width: 35px;
        margin: 0 0 0 10px;
      }
    }
  }

  .item:nth-child(2n - 1) {
    background: $--background-2;
  }

  .item:nth-child(4n - 2) {
    background: $--background-3;
  }

  .item:nth-child(4n) {
    background: $--background-1;
  }
}

@media screen and (min-width: 1024px) {
  .solution {
    .container {
      grid-template-columns: repeat(
        $--items-by-row-when-screen-is-more-than-1024px,
        1fr
      );
    }
  }
}

@media screen and (max-width: 1023px) and (min-width: 600px) {
  .solution {
    .container {
      grid-template-columns: repeat(
        $--items-by-row-when-screen-is-more-than-600px,
        1fr
      );
    }
  }
}

@media screen and (max-width: 600px) {
  .solution {
    .container {
      grid-template-columns: repeat(
        $--items-by-row-when-screen-is-less-than-600px,
        1fr
      );
    }
  }
}
</style>
