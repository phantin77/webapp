{
    "kind": "Pod",
    "id": "cassandra",
    "uid": "2afe32dd-cfa4-11e4-94ea-52546d69a10d",
    "creationTimestamp": "2015-03-21T16:27:53+08:00",
    "selfLink": "/api/v1beta1/pods/cassandra?namespace=default",
    "resourceVersion": 1323,
    "apiVersion": "v1beta1",
    "namespace": "default",
    "labels": {
        "name": "cassandra"
    },
    "desiredState": {
        "manifest": {
            "version": "v1beta2",
            "id": "",
            "volumes": [
                {
                    "name": "data",
                    "source": {
                        "hostDir": null,
                        "emptyDir": {},
                        "persistentDisk": null,
                        "gitRepo": null,
                        "secret": null
                    }
                }
            ],
            "containers": [
                {
                    "name": "cassandra",
                    "image": "kubernetes/cassandra:v1",
                    "command": [
                        "/run.sh"
                    ],
                    "ports": [
                        {
                            "name": "cql",
                            "containerPort": 9042,
                            "protocol": "TCP"
                        },
                        {
                            "name": "thrift",
                            "containerPort": 9160,
                            "protocol": "TCP"
                        }
                    ],
                    "env": [
                        {
                            "name": "MAX_HEAP_SIZE",
                            "key": "MAX_HEAP_SIZE",
                            "value": "512M"
                        },
                        {
                            "name": "HEAP_NEWSIZE",
                            "key": "HEAP_NEWSIZE",
                            "value": "100M"
                        },
                        {
                            "name": "KUBERNETES_API_PROTOCOL",
                            "key": "KUBERNETES_API_PROTOCOL",
                            "value": "http"
                        }
                    ],
                    "resources": {
                        "limits": {
                            "cpu": "1"
                        }
                    },
                    "cpu": 1000,
                    "volumeMounts": [
                        {
                            "name": "data",
                            "mountPath": "/cassandra_data",
                            "path": "/cassandra_data"
                        }
                    ],
                    "terminationMessagePath": "/dev/termination-log",
                    "imagePullPolicy": "PullIfNotPresent",
                    "capabilities": {}
                }
            ],
            "restartPolicy": {
                "always": {}
            },
            "dnsPolicy": "ClusterFirst"
        }
    },
    "currentState": {
        "manifest": {
            "version": "",
            "id": "",
            "volumes": null,
            "containers": null,
            "restartPolicy": {}
        },
        "status": "Running",
        "Condition": [
            {
                "kind": "Ready",
                "status": "Full"
            }
        ],
        "host": "10.80.188.27",
        "hostIP": "10.80.188.27",
        "podIP": "10.0.72.5",
        "info": {
            "cassandra": {
                "state": {
                    "running": {
                        "startedAt": "2015-03-24T03:33:10Z"
                    }
                },
                "ready": true,
                "restartCount": 4,
                "image": "kubernetes/cassandra:v1",
                "imageID": "docker://13d7bd47a96343941fdf99748e2ff0033a69b0baf85ce0f2222c0016f65bb0bb",
                "containerID": "docker://b8c5fa7025677b518dac9919dfa0feba44f9676c2b9fc095d840eb8184dc1ff9"
            }
        }
    }
}
