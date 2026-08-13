# BaconIpsum SDK feature factory

from baconipsum_sdk.feature.base_feature import BaconIpsumBaseFeature
from baconipsum_sdk.feature.test_feature import BaconIpsumTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BaconIpsumBaseFeature(),
        "test": lambda: BaconIpsumTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
