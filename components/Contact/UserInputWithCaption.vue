<template>
  <div class="user-input-container">
    <span class="input-caption">{{ caption }}</span>
    <div class="input-container" :class="{ showError: showError }">
      <slot></slot>
      <span class="asterisk" v-if="isMandatory">*</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showError: false,
    };
  },
  props: {
    caption: String,
    isMandatory: Boolean,
    hasError: Boolean,
  },
  watch: {
    hasError(newStatus, oldStatus) {
      this.showError = newStatus;
    },
  },
};
</script>

<style lang="scss">

.user-input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
.input-caption {
  font-size: $fs-tiny;
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  background-color: white;
  padding: $sp-small;

  &:focus-within {
    box-shadow: inset 0 0 0 3px $color-primary-transparent;
  }

  &.showError {
    box-shadow: inset 0 0 0 3px rgb(221, 59, 59, 0.5);
    animation: wiggle 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  @keyframes wiggle {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-3px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(3px, 0, 0);
    }
  }

  .asterisk {
    align-self: right;
    margin-left: $sp-tiny;
    color: rgb(221, 59, 59);
  }

  .icon-button {
    margin: 0;
    font-size: $fs-tiny;
    border: none;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      background-color: $color-light-grey;
    }
  }

  input,
  textarea {
    font-size: $fs-normal;
    flex-grow: 1;
    text-align: left;
    border: none;
    background-color: white;

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: none;
    height: 120px;
  }
}
</style>