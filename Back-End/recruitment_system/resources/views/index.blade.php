@extends('template')

@section('content')

<div class="container">
    <div class="card login-card">
        <div class="row no-gutters">
            <div class="col-md-12">
                <div class="card-body">

                    <form action="{{ route('logout') }}" method="POST">
                        @csrf
                        <button type="submit" class="btn btn-primary">
                            Logout
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection
