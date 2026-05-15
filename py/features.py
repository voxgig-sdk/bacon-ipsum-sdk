# BaconIpsum SDK feature factory

from feature.base_feature import BaconIpsumBaseFeature
from feature.test_feature import BaconIpsumTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BaconIpsumBaseFeature(),
        "test": lambda: BaconIpsumTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
