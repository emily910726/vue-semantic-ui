<template>
<div style="margin-left:14px; margin-right:14px">
  <div class="ui masthead vertical segment">
    <sui-header h1>{{wikiContent.title}}
      <sui-header sub base-class="header">{{wikiContent.caption}}</sui-header>
    </sui-header>
    <sui-button basic active>11 Themes</sui-button>
    <sui-button primary>Download</sui-button>
    <sui-menu right floated icon>
      <a class="item"><i class="edit icon"></i></a>
      <a class="item"><i class="bug icon"></i></a>
      <a class="item"><i class="alternate github icon"></i></a>
    </sui-menu>
    <sui-menu right floated icon>
      <a class="item"><i class="music icon"></i></a>
      <a class="item"><i class="world icon"></i></a>
    </sui-menu>
  </div>

  <div class="main ui container">
    <!-- sidebar nav -->
    <div class="ui dividing right rail">
      <div class="ui sticky" style="left: 1209px;">
        <h4 class="ui header">{{wikiContent.title}}</h4>
        <div class="ui vertical following fluid accordion text menu">
          <div
            v-for="(section, idx) in wikiContent.sections"
            :key="idx"
            class="item">
            <a class="title active"><i class="dropdown icon"></i> <b>{{section.title}}</b></a>
            <div
              v-for="(subsection, idx2) in section.subSections"
              :key="idx2"
              class="content menu active">
              <a class="item" href="#input">{{subsection.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- main content -->
    <slot></slot>
    <template v-for="(section, idx) in wikiContent.sections">
      <sui-header dividing h2 :key="`h${idx}`">{{section.title}}</sui-header>

      <div v-for="(subsection, idx2) in section.subSections" :key="`c${idx}${idx2}`">
        <sui-header h4>{{subsection.title}}</sui-header>
        <p>{{subsection.caption}}</p>
        <example-segment
          class="example"
          v-for="(example, idx3) in subsection.examples"
          :key="`e${idx3}`"
          v-model="example.code"
          :note="example.note"
          :inverted="example.inverted" />
      </div>
    </template>
  </div>
</div>
</template>

<script>
import ExampleSegment from '@/wiki/components/ExampleSegment'

export default {
  name: 'WikiTemplate',
  components: { ExampleSegment },
  props: ['value'],
  data() {
    return {
      wikiContent: {

      }
    }
  },
  mounted() {
    this.wikiContent = this.value
  }
};
</script>

<style scoped>
.masthead {
  padding-top: 5em;
  min-height: 185px;
}
.main {
  padding-top: 28px;
  padding-bottom: 98px;
}
.main.container {
  position: relative;
  width: auto !important;
  max-width: 960px !important;
}
/* .main >>> h4, p, div {
  margin-left: 14px;
  margin-right: 14px;
}
.main >>> h2 {
  margin-bottom: 28px;
} */
.rail {
  padding-left: 1.5em;
  width: 260px;
}
.example {
  margin-bottom: 28px;
}
</style>
