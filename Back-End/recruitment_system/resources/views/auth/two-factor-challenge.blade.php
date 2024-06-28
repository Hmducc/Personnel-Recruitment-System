@extends('template')

@section('content')
    <div class="container">
        <div class="card login-card">
            <div class="row no-gutters">
                <div class="col-md-5">
                    <img src="/img/login.jpg" alt="login" class="login-card-img">
                </div>
                <div class="col-md-7">
                    {{-- @if($errors->any())
                        @foreach ($errors->all() as $error)
                            <h2>{{ $error }}</h2>
                        @endforeach
                    @endif
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                    @enderror --}}
                    <div class="card-body">
                        <div class="brand-wrapper">
                            <img src="/img/logo.png" alt="logo" class="logo">
                        </div>
                        @if (@session('status'))

                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>

                        @endif
                        <p class="login-card-description">Please enter your authentication code to login</p>
                        <form method="POST" action="{{ route('/two-factor-challenge') }}">
                            @csrf
                            <input type="text" name="code" class="form-control">
                            <input name="submit" id="submit" class="btn btn-block login-btn mb-4" type="submit" value="Submit">
                        </form>
                        <p class="login-card-description">Enter your recovery code</p>
                        <form method="POST" action="{{ route('/two-factor-challenge') }}">
                            @csrf
                            <input type="text" name="recovery_code" class="form-control">
                            <input name="submit" id="submit" class="btn btn-block login-btn mb-4" type="submit" value="Submit">
                        </form>
                        <a href="#" class="forgot-password-link">Forgot password?</a>
                        <p class="login-card-footer-text">Don't have an account? <a href="{{ route('register') }}" class="text-reset">Register here</a></p>
                        <nav class="login-card-footer-nav">
                            <a href="#!">Terms of use.</a>
                            <a href="#!">Privacy policy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
@endsection
