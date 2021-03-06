//elements
import UiButton from '@/port/elements/UIButton'
import UiButtons from '@/port/elements/UIButtons'
import UiContainer from '@/port/elements/UIContainer'
import UiDivider from '@/port/elements/UIDivider'
import UiFlag from '@/port/elements/UIFlag'
import UiHeader from '@/port/elements/UIHeader'
import UiIcon from '@/port/elements/UIIcon'
import UiIcons from '@/port/elements/UIIcons'
import UiImage from '@/port/elements/UIImage'
import UiInput from '@/port/elements/UIInput'
import UiLabel from '@/port/elements/UILabel'
import UiLabels from '@/port/elements/UILabels'
import UiList from '@/port/elements/UIList'
import UiListContent from '@/port/elements/UIListContent'
import UiListItem from '@/port/elements/UIListItem'
import UiLoader from '@/port/elements/UILoader'
import UiReveal from '@/port/elements/UIReveal'
import UiRail from '@/port/elements/UIRail'
import UiSegment from '@/port/elements/UISegment'
import UiStep from '@/port/elements/UIStep'

//collections
import UiMenu from '@/port/collections/UIMenu'
import UiMenuItem from '@/port/collections/UIMenuItem'

//modules
import UiAccordion from '@/port/modules/UIAccordion'
import UiAccordionTitle from '@/port/modules/UIAccordionTitle'
import UiAccordionContent from '@/port/modules/UIAccordionContent'
import UiCheckbox from '@/port/modules/UICheckbox'
import UiDimmer from '@/port/modules/UIDimmer'
import UiDropdown from '@/port/modules/UIDropdown'
import UiDropdownItem from '@/port/modules/UIDropdownItem'
import UiModal from '@/port/modules/UIModal'
import UiModalContent from '@/port/modules/UIModalContent'
import UiSearch from '@/port/modules/UISearch'
import UiSearchCategory from '@/port/modules/UISearchCategory'
import UiSearchResult from '@/port/modules/UISearchResult'

export default {
  install: function(Vue, options) {
    // Vue.directive('template', {
    //   bind: function () {},
    //   inserted: function () {},
    //   update: function () {},
    //   componentUpdated: function () {},
    //   unbind: function () {}
    // })
    Vue.component('SuiButton', UiButton)
    Vue.component('SuiButtons', UiButtons)
    Vue.component('SuiContainer', UiContainer)
    Vue.component('SuiDivider', UiDivider)
    Vue.component('SuiFlag', UiFlag)
    Vue.component('SuiHeader', UiHeader)
    Vue.component('SuiIcon', UiIcon)
    Vue.component('SuiIcons', UiIcons)
    Vue.component('SuiImage', UiImage)
    Vue.component('SuiInput', UiInput)
    Vue.component('SuiLabel', UiLabel)
    Vue.component('SuiLabels', UiLabels)
    Vue.component('SuiList', UiList)
    Vue.component('SuiListContent', UiListContent)
    Vue.component('SuiListItem', UiListItem)
    Vue.component('SuiLoader', UiLoader)
    Vue.component('SuiReveal', UiReveal)
    Vue.component('SuiRail', UiRail)
    Vue.component('SuiSegment', UiSegment)
    Vue.component('SuiStep', UiStep)

    Vue.component('SuiMenu', UiMenu)
    Vue.component('SuiMenuItem', UiMenuItem)

    Vue.component('SuiAccordion', UiAccordion)
    Vue.component('SuiAccordionTitle', UiAccordionTitle)
    Vue.component('SuiAccordionContent', UiAccordionContent)
    Vue.component('SuiCheckbox', UiCheckbox)
    Vue.component('SuiDimmer', UiDimmer)
    Vue.component('SuiDropdown', UiDropdown)
    Vue.component('SuiDropdownItem', UiDropdownItem)
    Vue.component('SuiModal', UiModal)
    Vue.component('SuiModalContent', UiModalContent)
    Vue.component('SuiSearch', UiSearch)
    Vue.component('SuiSearchCategory', UiSearchCategory)
    Vue.component('SuiSearchResult', UiSearchResult)
  }
}
