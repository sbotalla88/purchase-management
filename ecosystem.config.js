module.exports = {
    apps: [
        {
            name: 'alpine_purchase_order',
            script: 'dist/index.js',
            instances: 1,
            exec_mode: 'cluster',
            max_memory_restart: '3G',
            env: {
                NODE_ENV: 'production',
            },
        }
    ],
};
