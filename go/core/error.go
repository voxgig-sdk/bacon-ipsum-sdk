package core

type BaconIpsumError struct {
	IsBaconIpsumError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBaconIpsumError(code string, msg string, ctx *Context) *BaconIpsumError {
	return &BaconIpsumError{
		IsBaconIpsumError: true,
		Sdk:              "BaconIpsum",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BaconIpsumError) Error() string {
	return e.Msg
}
