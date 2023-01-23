<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ajax-Jquery Bootstrap PHP </title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <script src="js/jquery.js"></script>
  <script src="js/app.js" defer></script>
</head>

<body>
  <div class="container text-right">
    <div class="row mt-4">
      <h1>Belajar Ajax Jquery Bootstrap PHP</h1>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="row">
          <h2>Input Data Pelanggan</h2>
        </div>
        <div class="row">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Pelanggan</label>
              <input type="text" class="form-control" id="pelanggan" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Harus di isi</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Alamat</label>
              <input type="text" class="form-control" id="alamat">
              <div id="emailHelp" class="form-text">Harus di isi</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Telp</label>
              <input type="text" class="form-control" id="telp">
              <div id="emailHelp" class="form-text">Harus di isi</div>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" id="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <h2>Data Pelanggan</h2>
        </div>
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Pelanggan</th>
                <th scope="col">Alamat</th>
                <th scope="col">Telp</th>
              </tr>
            </thead>
            <tbody id="isidata">
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>

</html>