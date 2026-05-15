# ProjectName SDK exists test

import pytest
from baconipsum_sdk import BaconIpsumSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BaconIpsumSDK.test(None, None)
        assert testsdk is not None
