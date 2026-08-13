# BaconIpsum SDK utility: make_context

from projectname_sdk.core.context import BaconIpsumContext


def make_context_util(ctxmap, basectx):
    return BaconIpsumContext(ctxmap, basectx)
