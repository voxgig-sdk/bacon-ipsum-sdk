# BaconIpsum SDK feature factory

from baconipsum_sdk.feature.base_feature import BaconIpsumBaseFeature
from baconipsum_sdk.feature.ratelimit_feature import BaconIpsumRatelimitFeature
from baconipsum_sdk.feature.retry_feature import BaconIpsumRetryFeature
from baconipsum_sdk.feature.test_feature import BaconIpsumTestFeature
from baconipsum_sdk.feature.timeout_feature import BaconIpsumTimeoutFeature


_FEATURES = {
    "base": lambda: BaconIpsumBaseFeature(),
    "ratelimit": lambda: BaconIpsumRatelimitFeature(),
    "retry": lambda: BaconIpsumRetryFeature(),
    "test": lambda: BaconIpsumTestFeature(),
    "timeout": lambda: BaconIpsumTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
