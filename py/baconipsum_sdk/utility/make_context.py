# BaconIpsum SDK utility: make_context

from baconipsum_sdk.core.context import BaconIpsumContext


def make_context_util(ctxmap, basectx):
    return BaconIpsumContext(ctxmap, basectx)
