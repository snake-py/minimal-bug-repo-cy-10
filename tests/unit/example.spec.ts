import Vue from 'vue';
import Vuex from 'vuex';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
const localVue = createLocalVue();

localVue.use(Vuex);

jest.resetModules();

const $t = () => {
    console.log('testing');
};

describe('Ads Pop Up Widget', () => {
    it('Check Render', () => {});
});
