const common = require('./../../app/common');
const assert = require('assert');
const Koahub = require('./../../app');

describe('http util', () => {

    let app;

    beforeEach(function () {
        app = new Koahub();
    });

    describe('getModuleControllerAction', () => {
        it('path / return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/'), {
                module: 'home',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /home return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/home'), {
                module: 'home',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /home/index return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/home/index'), {
                module: 'home',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /home/index/index return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/home/index/index'), {
                module: 'home',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /admin return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/admin'), {
                module: 'admin',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /admin/index return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/admin/index'), {
                module: 'admin',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /admin/index/index return home/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/admin/index/index'), {
                module: 'admin',
                controller: 'index',
                action: 'index'
            });
        });

        it('path /admin/index/index/index return /admin/index/index/index', () => {
            assert.deepEqual(common.getModuleControllerAction('/admin/index/index/index'), {
                module: 'admin',
                controller: 'index/index',
                action: 'index'
            });
        });
    });

});
