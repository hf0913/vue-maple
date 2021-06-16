import MapleButton from './MapleButton.vue';
import MapleIcon from './MapleIcon.vue';
import MapleButtonGroups from './MapleButtonGroups.vue';
import MapleCollapse from './MapleCollapse.vue';

export { MapleButton, MapleIcon, MapleButtonGroups, MapleCollapse };

const Components = { MapleButton, MapleIcon, MapleButtonGroups, MapleCollapse };

export default function install(Vue: any) {
    for (const [name, component] of Object.entries(Components)) {
        Vue.component(name, component);
    }
}
